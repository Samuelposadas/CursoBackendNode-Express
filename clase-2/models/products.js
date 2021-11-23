const getAll = () => {
  return [
    {
      id: 1,
      title: "detergente",
      price: 140,
      available_quantity: 20,
      condition: "new",
      description: "el mejor detergente",
      warranty: "1 dia",
    },
    {
      id: 2,
      title: "suavizante",
      price: 280,
      available_quantity: 20,
      condition: "new",
      description: "el mejor suavizante",
      warranty: "2 dia",
    },
  ];
};

module.exports = {getAll};
