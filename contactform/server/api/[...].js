
export default defineEventHandler(async (event) => {
        const config = useRuntimeConfig()
        const gMethod = getMethod(event);
        const paramsUrl = event.context.params._;
        let formData;
        if (gMethod === "POST") {
          formData = await readBody(event);
        }
        if (gMethod === "PUT") {
          formData = await readBody(event);
        }
       
        let params = "";
        let split = "";
        if (event.req.url.includes("?")) {
          split = event.req.url.split("?");
          params = split[1];
        }
        let token = getCookie(event, "token");
        // console.log('token',token);
        const data = await $fetch(
          `${config.public.apiBase}/${paramsUrl}?${params}`,
          {
            method: gMethod ? gMethod : "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // "X-API-TOKEN": config.apiSecret,
              Authorization: token,
            },
            body: formData ? formData : null,
          }
        );
        return { data };
       });
    