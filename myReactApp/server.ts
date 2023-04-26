import express from 'express';
import serveStatic from 'serve-static';
import { createServer as createViteServer, ViteDevServer } from 'vite';

const PORT = 5000;

const createServer = async () => {
  const app = express();

  const viteServ = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(viteServ.middlewares);
  app.use('/assets', express.static('./build/client'));

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const renderApp = (await viteServ.ssrLoadModule('./src/entry-server.tsx')).render;
      await renderApp(url, res);
    } catch (error: unknown) {
      viteServ.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  return { app };
};

createServer().then(({ app }) =>
  app.listen(PORT, () => console.log(`Application is listening on the http://localhost:${PORT}/`)),
);
