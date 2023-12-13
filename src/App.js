import Info from "./components/Info";

function App() {
  return ( //từ 2 trở lên thì có ngoặc tròn và bao những thành phần bên trong bởi div
    <div>
      <Info a="a" b="b" name="Nguyen Van A" age="26" phone="123456" />
      <Info a="a" b="b" name="Nguyen Van B" age="28" phone="123488" />
    </div>

  );
}

export default App;
