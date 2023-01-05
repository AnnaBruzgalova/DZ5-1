import Character from '../Magician';

test('create Character ok', () => {
  const character = new Character('Anna', 'Magician');
  const result = {
    name: 'Anna',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
