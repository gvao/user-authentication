import { PORT, server } from "./infra/http/express";

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}: http://localhost:${PORT}`);
})