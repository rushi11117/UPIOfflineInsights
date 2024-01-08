const generateDummyData = () => {
    const data = [];
    const totalDays = 30;
    const totalTransactions = 200;
  
    for (let i = 1; i <= totalDays; i++) {
      const successful = Math.floor(Math.random() * totalTransactions);
      const remaining = totalTransactions - successful;
      const pending = Math.floor(Math.random() * remaining);
      const failed = remaining - pending;
  
      data.push({
        date: `2023-01-${i < 10 ? '0' + i : i}`,
        successful,
        pending,
        failed,
      });
    }
  
    return data;
  };
  
  export default generateDummyData;
  