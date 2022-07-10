import type { GluegunToolbox } from "gluegun";

/*
 * Add your CLI-specific functionality here, which will then be accessible
 * to your commands
 */
module.exports = (toolbox: GluegunToolbox) => {
	toolbox.foo = () => {
		toolbox.print.info("called foo extension");
	};

	/*
	 * Enable this if you want to read configuration in from
	 * the current folder's package.json (in a "calculator-cli" property),
	 * calculator-cli.config.json, etc.
	 * toolbox.config = {
	 *   ...toolbox.config,
	 *   ...toolbox.config.loadConfig("calculator-cli", process.cwd())
	 * }
	 */
};
