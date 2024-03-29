import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import ServerBar from "../components/ServerBar/ServerBar";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";
import WebSocket from "tauri-plugin-websocket-api";

function App() {
  // Test WS server https://github.com/tauri-apps/plugins-workspace/blob/dev/plugins/websocket/guest-js/index.ts#L31
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [test, setTest] = useState("Testing");
  const [testMsg, setTestMsg] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  async function tester() {
    setTestMsg(await invoke("test", { test }));
  }

  return (
    <main className="">
      <div className="flex justify-center flex-col items-center space-y-4 mt-12">
        <h1>Welcome to Tauri!</h1>
        <button className="btn btn-secondary" onClick={tester}>
          get tester
        </button>
        <p>{testMsg}</p>
        <div className="row">
          <span className="logos">
            <a href="https://nextjs.org" target="_blank">
              <Image
                width={144}
                height={144}
                src={nextLogo}
                className="logo next"
                alt="Next logo"
              />
            </a>
          </span>
          <span className="logos">
            <a href="https://tauri.app" target="_blank">
              <Image
                width={144}
                height={144}
                src={tauriLogo}
                className="logo tauri"
                alt="Tauri logo"
              />
            </a>
          </span>
          <span className="logos">
            <a href="https://reactjs.org" target="_blank">
              <Image
                width={144}
                height={144}
                src={reactLogo}
                className="logo react"
                alt="React logo"
              />
            </a>
          </span>
        </div>

        <p>Click on the Tauri, Next, and React logos to learn more.</p>

        <div className="row">
          <div>
            <input
              id="greet-input"
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Enter a name..."
            />
            <button type="button" onClick={() => greet()}>
              Greet
            </button>
          </div>
        </div>

        <p>{greetMsg}</p>
      </div>
    </main>
  );
}

export default App;
