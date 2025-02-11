const Base = (props: { children: JSX.Element, 
class: string }) => {
  return (
    <div class="rounded-3xl hover:shadow-lg transition-shadow duration-400">
      {props.children}
    </div>
  );
};
export default Base;
