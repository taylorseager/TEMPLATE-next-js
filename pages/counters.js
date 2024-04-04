import Counter from '../components/Counter';

export default function countersArray() {
  const counters = [{ title: 'Redemption Series' }, { title: 'Firstborn Series' }, { title: 'Sunrise Series' }, { title: 'Angels Walking Series' }];

  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </>
  );
}
