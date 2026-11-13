export const Counter = () => {
  let count = 0;
  const handeclick () => {
    count++;
    console.log(count);
  } 


  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={handeclick}>Increment</button></>
  );
}   