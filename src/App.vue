<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 14 14"
        class="mx-auto text-indigo-600"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13" />
          <path
            d="M8.367 5.69c.157-.255.5-.418.834-.418c.334 0 .678.163.835.417m-4.403.001c-.157-.255-.5-.418-.834-.418c-.334 0-.678.163-.835.417m.216 2.945a1.41 1.41 0 1 0 2.819 0a1.41 1.41 0 0 0 2.82 0"
          />
        </g>
      </svg>
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Create a todo
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6">

        <div class="grid grid-cols-2 gap-x-2">
          <button
            @click="createToDo"
            type="button"
            class="col-start-2 inline-flex disabled:opacity-30 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add task
          </button>
        </div>
      </form>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">Set duration (ms)</th>
              <th scope="col" class="px-6 py-3">Completed in (ms)</th>
              <th scope="col" class="px-6 py-3">Active</th>
              <th scope="col" class="px-6 py-3">Done</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              v-for="todo in reversed"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ todo.order }}
              </th>
              <td class="px-6 py-4">{{ todo.duration * 1000 }}</td>
              <td class="px-6 py-4">{{ todo.realDuration }}</td>
              <td class="px-6 py-4">
                <svg
                  v-if="todo.active"
                  class="animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 2m4.243 1.757a2 2 0 1 1 3.999-.001a2 2 0 0 1-3.999.001M13 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-1.757 4.243a1 1 0 1 1 2 0a1 1 0 0 1-2 0M7 14a1 1 0 0 1 2 0a1 1 0 0 1-2 0m-4.243-1.757a1 1 0 0 1 2 0a1 1 0 0 1-2 0m-.5-8.486a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1-3 0M.875 8a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                  />
                </svg>
              </td>
              <td class="px-6 py-4">
                <svg
                  v-if="todo.done"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                    />
                    <path
                      fill="currentColor"
                      d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0"
                    />
                  </g>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { getDuration } from "./utils/getDuration";
import { useQueue } from "./utils/queue";

type ToDo = {
  order: number;
  duration: number;
  realDuration?: number;
  done?: boolean;
  active?: boolean;
};

const concurrency = 3;

let order = 1;

const createToDo = () => {
  const todo: ToDo = {
    order: order++,
    duration: getDuration(),
  };
  todos.value.push(todo);
  addJobs({
    type: "TODO",
    params: todo,
  });
};

const handleToDo = async (todo: ToDo): Promise<ToDo> => {
  const started = Date.now();

  const target = todos.value.find((t) => t.order === todo.order);
  if (target) {
    target.active = true;
  }
  return new Promise((resolve) =>
    setTimeout(resolve, todo.duration * 1000)
  ).then(() => {
    console.log(Date.now() - started);
    return {
      ...todo,
      realDuration: Date.now() - started,
      done: true,
    };
  });
};

const { addJobs } = useQueue({
  resolvers: {
    TODO: handleToDo,
  },
  concurrency,
  onSuccess: (data) => {
    const todo = data.result;
    const index = todos.value.findIndex((t) => t.order === todo.order);
    const target = todos.value[index];
    if (target) {
      target.done = true;
      target.realDuration = todo.realDuration;
      target.active = false;
    }
    todos.value[index] = target;
  },
});
const todos = ref<ToDo[]>([]);
const reversed = computed(() => [...todos.value].reverse());
</script>

<style scoped></style>