const arrayValor = [1,2,3,4,5,6];

const arrayObjects = [
    {valor: 1 , valor2: '13/11/2024', valor3: 'tres' },
    {valor: 1 , valor2: '14/11/2024', valor3: 'tres' },
]

console.table(arrayObjects)

arrayObjects.push({valor: 4 , valor2: '14/11/2024', valor3: 'quarto'})

console.table(arrayObjects)