'use strict';

var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports = '# Soji API\n' + fs.readFileSync('./content/introduction.md', 'utf8') + '\n' + '# Staff\n' + fs.readFileSync('./content/staff.md', 'utf8') + '\n' + '# Job\n' + fs.readFileSync('./content/job.md', 'utf8') + '\n' + '# Task\n' + fs.readFileSync('./content/task.md', 'utf8') + '\n' + '# File\n' + fs.readFileSync('./content/file.md', 'utf8') + '\n';