import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const buildsRouter = router({
  createBuild: publicProcedure
    .input(z.object({ matchUp: z.string(), build: z.string()}))
    .mutation(async ({ input , ctx}) => {
      const build = await ctx.prisma.builderOrder.create({
        data: {
          ...input,
        },
      })
      return build;
    }),
  getBuildsByMatchUp: publicProcedure
    .input(z.object({matchUp: z.string()}))
    .query(async ({ ctx, input }) => {
      const build = await ctx.prisma.builderOrder.findMany({
        where: {
          matchUp: input.matchUp,
        }
      })
      return build;
    }),
  getBuilds: publicProcedure
    .query( async ({ ctx }) => {
      const build = await ctx.prisma.builderOrder.findMany();

      return build;
    }),
});
