// import { router } from "../trpc";
// import { authRouter } from "./auth";
// import { exampleRouter } from "./example";
import { itemRouter } from './itemRouter'
import { createRouter } from "../context";
import superjson from "superjson";

// export const appRouter = router({
//   example: exampleRouter,
//   item: itemRouter,
//   auth: authRouter,
// });

export const appRouter = createRouter().transformer(superjson).merge('items.', itemRouter)


// export type definition of API
export type AppRouter = typeof appRouter;