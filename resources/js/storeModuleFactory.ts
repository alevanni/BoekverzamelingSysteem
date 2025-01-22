import { computed, Ref, ref } from 'vue';
import { Author, Book, Review } from './domains/types';
import { getRequest } from './services/http';

export const storeModuleFactory = (moduleName: any) => {
    const state: Ref<Author[] | Book[] | Review[]> = ref([]);

    const getters = {
        // Met "all" kunnen we de gegevens als computed value uit de state halen,
        // wat voor reactiviteit tussen componenten en state zorgt.
        all: computed(() => Object.values(state.value)),

        // Met "byId" kunnen we een specifiek item als computed value uit de state halen,
        // wat voor reactiviteit tussen componenten en state zorgt.
        byId: (id: number) => computed(() => state.value[id])
    };

    const setters = {
        // met setAll() kunnen we data, wat uit de backEnd komt, in de state zetten op basis van id
        setAll: (items: any[]) => {
            items.forEach(item => {
                state.value[item.id] = item;
            });
        }
    };

    const actions = {
        getAll: async () => {
            // Simuleer een oproep naar een API, mbv de Axios facade
            const { data } = await getRequest(moduleName);
            if (!data) return
            setters.setAll(data);
        }
    };

    return {
        getters,
        actions
    };
};

