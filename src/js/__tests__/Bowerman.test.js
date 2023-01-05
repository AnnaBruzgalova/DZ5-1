import Character from '../Bowerman';

test('create Character ok', () => {
  const character = new Character('Anna', 'Bowman');
  const result = {
    name: 'Anna',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
