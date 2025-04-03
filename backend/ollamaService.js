const { execSync } = require('child_process');

function queryOllamaModel(query) {
  try {
    const command = `ollama run gemma3:4b '${query}'`;
    return execSync(command, { encoding: 'utf8' }).toString().trim();
  } catch (error) {
    console.error('Error querying Ollama model:', error);
    throw error;
  }
}

module.exports = {
  queryOllamaModel
};