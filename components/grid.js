export default function Grid() {
  const arr = [
    {
      title: "1",
      content: "test1",
    },
    {
      title: "2",
      content: "test2",
    },
    {
      title: "3",
      content: "test3",
    },
  ];
  return (
    <div className="w-full mt-7">
      <div className="grid grid-cols-3 gap-2">
        {arr.map((ele) => {
          return (
            <div className="border-2">
              <div>{ele.title}</div>
              <div>{ele.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
