export default {
    async fetch(request, context) {
        const { env } = await import("alibaba:workers");
        const testa = env.testa;
        const testb = env.testb;
        const testc = env.testc;
        const testd = env.testd;
        const testE = env.testE;
        const Testf = env.Testf;
        const testf = env.testf;
        const testg = env.testg;
      
        return new Response(`testa:${testa},testb:${testb},testc:${testc},testd:${testd},testE:${testE},Testf:${Testf},testf:${testf},testg:${testg}`);
    },
  };
