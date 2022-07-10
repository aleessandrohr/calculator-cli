import type { GluegunCommand } from "gluegun";

const command: GluegunCommand = {
	name: "calculator-cli",
	// eslint-disable-next-line require-await
	run: async toolbox => {
		const { print } = toolbox;

		print.info("Welcome to your CLI");
	},
};

module.exports = command;
