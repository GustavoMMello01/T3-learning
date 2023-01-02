import { z } from "zod";

import { router, publicProcedure } from "../trpc";
import { mockSession } from "next-auth/client/__tests__/helpers/mocks";
import name = mockSession.user.name;

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.shoppingItem.create(

    );
  }),
});
