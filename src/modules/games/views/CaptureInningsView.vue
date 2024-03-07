<template>
  <div class="container mx-auto py-8">
    <h2 class="text-2xl font-bold mb-4">Turnos al bate</h2>
    
    <!-- Formulario para ingresar un nuevo turno al bate -->
    <form @submit.prevent="agregarTurno" class="mb-4">
      <div class="flex items-center mb-4">
        <label for="jugador" class="mr-2">Jugador:</label>
        <select v-model="nuevoTurno.player" id="jugador" class="border border-gray-400 rounded px-2 py-1">
          <option v-for="jugador in players" :value="jugador.playerName" :key="jugador.playerName">{{ jugador.playerName }}</option>
        </select>
      </div>
      
      <div class="flex items-center mb-4">
        <label for="resultado" class="mr-2">Resultado:</label>
        <select v-model="nuevoTurno.result" id="resultado" class="border border-gray-400 rounded px-2 py-1">
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">HR</option>
          <option value="out">Out</option>
          <option value="dp">Doble Play</option>
          <option value="tp">Triple Play</option>
        </select>
      </div>
      
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Agregar turno</button>
    </form>
        <!-- Siguiente bateador, outs y carreras -->
    
    <!-- Siguiente bateador, outs, carreras y bases -->
    <div v-if="!finDeInning" class="mb-4">
      <p>Siguiente bateador: {{ siguienteBateador?.playerName }}</p>
      <p class="mt-2">Outs: {{ outs }}</p>
      <p class="mt-2">Carreras anotadas: {{ carrerasAnotadas }}</p>
      <div class="mt-2">
        <p>Bases:</p>
        <div v-if="bases.first" class="mb-2">Primera base: {{ bases.first }}</div>
        <div v-if="bases.second" class="mb-2">Segunda base: {{ bases.second }}</div>
        <div v-if="bases.third" class="mb-2">Tercera base: {{ bases.third }}</div>
      </div>
    </div>
    <div v-else class="mb-4">
      <p class="mb-2">Outs: {{ outs }}</p>
      <p class="mb-2">Carreras anotadas: {{ carrerasAnotadas }}</p>
      <p>Fin de la entrada.</p>
    </div>
    
    <!-- Tabla de turnos al bate -->
    <table v-if="turnos.length > 0" class="border border-gray-400 mb-4">
      <thead class="bg-gray-200">
        <tr>
          <th class="px-4 py-2">Jugador</th>
          <th class="px-4 py-2">Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(turno, index) in turnos" :key="index" class="border-t border-gray-400">
          <td class="px-4 py-2">{{ turno.player }}</td>
          <td class="px-4 py-2">{{ turno.result }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="mt-4">No hay turnos al bate registrados.</p>
    

  </div>
</template>

<script setup lang="ts">
import { PlayerResponse } from "../interfaces/players-create.response";
import { Player } from "../interfaces/players";
import { ref, computed } from 'vue';

interface Props {
  players: PlayerResponse[];
}
interface atBat {
  player: string;
  result: string;
}

const props = defineProps<Props>();


interface Bases {
  first: string | undefined;
  second: string | undefined;
  third: string | undefined;
}


    const turnos = ref<atBat[]>([]);
    const nuevoTurno = ref<atBat>({ player: '', result: '' });
    const outs = ref<number>(0);
    const carrerasAnotadas = ref<number>(0);
      const bases = ref<Bases>({ first: undefined, second: undefined, third: undefined });
    const maxOuts = 3;

    const siguienteBateador = computed(() => {
      if (turnos.value.length === 0) {
        return props.players[0]; // El primer bateador
      }

      if (outs.value >= maxOuts) {
        return null; // Fin de la entrada
      }
      
      const ultimoTurno = turnos.value[turnos.value.length - 1];
      const ultimoJugadorIndex = props.players.findIndex(jugador => jugador.playerName === ultimoTurno.player);
      
      // Determinar el próximo bateador
      const siguienteIndex = (ultimoJugadorIndex + 1) % props.players.length;
      return props.players[siguienteIndex];
    });

    const finDeInning = computed(() => {
      return outs.value >= maxOuts || turnos.value.length === props.players.length;
    });

    const agregarTurno = () => {
      console.log(nuevoTurno.value)

      const playerAtBat = {
        player: nuevoTurno.value.player,
        result: nuevoTurno.value.result
      }
      // Agregar el nuevo turno a la lista de turnos
      turnos.value.push(playerAtBat);
      if (nuevoTurno.value.result.toLowerCase() === 'out') {
        outs.value++;
      }

      actualizarBases(parseInt(nuevoTurno.value.result));
      // Limpiar el formulario
      nuevoTurno.value.player = siguienteBateador.value?.playerName ?? '';
      nuevoTurno.value.result = '';
      
      // Verificar si hay outs
      // Actualizar el estado de las bases según el resultado

    };

    const actualizarBases = (carreras: number) => {
      if (carreras === 1) {
        if (!bases.value.first) {
          bases.value.first = nuevoTurno.value.player;
        } else if (!bases.value.second) {
          bases.value.second = bases.value.first;
          bases.value.first = nuevoTurno.value.player;
        } else if (!bases.value.third) {
          bases.value.third = bases.value.second;
          bases.value.second = bases.value.first;
          bases.value.first = nuevoTurno.value.player;
        } else {
          bases.value.third = bases.value.second;
          bases.value.second = bases.value.first;
          bases.value.first = nuevoTurno.value.player;
          carrerasAnotadas.value ++;

        }
      } else if (carreras === 2) {
        if (!bases.value.first && !bases.value.second) {
          bases.value.second = nuevoTurno.value.player;
        } else if (!bases.value.second && !bases.value.third) {
          bases.value.third = bases.value.first;
          bases.value.first = undefined;
          bases.value.second = nuevoTurno.value.player;
        } else if (!bases.value.third) {
          bases.value.third = bases.value.second;
          bases.value.second = nuevoTurno.value.player;
        } else {
          bases.value.third = nuevoTurno.value.player;
        }
      } else if (carreras === 3) {
        if (!bases.value.first && !bases.value.second && !bases.value.third) {
          bases.value.third = nuevoTurno.value.player;
        } else {
          bases.value.third = nuevoTurno.value.player;
          bases.value.second = undefined;
          bases.value.first = undefined;
        }
      } else if (carreras === 4) {
        bases.value.first = undefined;
        bases.value.second = undefined;
        bases.value.third = undefined;
      }
    };

</script>

<style scoped></style>
