import { build } from "gluegun";

/**
 * Create the cli and kick it off
 */
const run = async argv => {
	// Create a CLI runtime
	const cli = build()
		.brand("calculator-cli")
		.src(__dirname)
		.plugins("./node_modules", { matching: "calculator-cli-*", hidden: true })
		.help() // Provides default for help, h, --help, -h
		.version() // Provides default for version, v, --version, -v
		.create();
	/*
	 * Enable the following method if you'd like to skip loading one of these core extensions
	 * this can improve performance if they're not necessary for your project:
	 * .exclude(['meta', 'strings', 'print', 'filesystem', 'semver', 'system', 'prompt', 'http', 'template', 'patching', 'package-manager'])
	 * and run it
	 */
	const toolbox = await cli.run(argv);

	// Send it back (for testing, mostly)
	return toolbox;
};

module.exports = { run };
