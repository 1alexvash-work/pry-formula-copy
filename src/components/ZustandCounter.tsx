import create from "zustand";

const useStore: any = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Controls() {
  const inc = useStore((state: any) => state.inc);

  return <button onClick={inc}>one up</button>;
}

// function Counter() {
//   const count = useStore((state):any => state.count)

//   return <h1>{count}</h1>
// }

// export function Counter2() {
//   const { count, inc } = useStore()

//   return (
//     <div className="counter">
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
