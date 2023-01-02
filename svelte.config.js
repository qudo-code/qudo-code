import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

const config = {
    kit : {
        adapter : adapter(),
    },

    preprocess : [
        preprocess({
            postcss : true,
        }),
    ],

    kit : {
        adapter : adapter(),

        alias : {
            src : "./src",
        },
    },
};

export default config;
