export function distributeTasks (items, agentCount = 5) {
  const result = {};
  for (let i = 0; i < agentCount; i++) {
    result[`agent${i + 1}`] = [];
  }

  items.forEach((item, index) => {
    const agentIndex = index % agentCount;
    result[`agent${agentIndex + 1}`].push(item);
  });

  return result;
};