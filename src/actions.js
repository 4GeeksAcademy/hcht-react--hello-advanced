// In this file you will have an initial store when initializing your application and the actions that can modify your store
// Remember that only the actions can change the value of the store, 
// It is the analogous to the "setter" function of the useState.

export default ({ getStore, getActions, setStore }) => ({
  exampleFunction: () => { getActions().changeColor(0, 'green'); },
  changeColor: (index, color) => {
    // const store = getStore();
    const demo = getStore().demo.map((element, i) => {
      if (i === index) {
        element.background = color;
      }
      return element;
    });
    // Reset the global store
    console.log(demo)
    setStore({ demo: demo });
  }
})


/* 
Syntax into actions:

1. Usar getActions() para llamar a otra actions(function) dentro de una actions(fuction)
	getActions().changeColor(0, "green")

2. Utilizar getStore() para acceder al valor de un "store" dentro de un "actions"
		2.1
			const store = getStore();
			store.demo.map()
		2.2
			getStore().demo.map()

3. Utilizar setStore() para guardar un valor en un "store" (recordar que store es un objeto)
	setStore({ demo: demo });

*/