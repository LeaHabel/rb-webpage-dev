export default function Footer() {
    return (
        <>
            <div className="felx justify-center items-center h-16 bg-black text-white">
                <p>© 2021 </p>
                <a>Disclaimer</a>
                <a>Impressum</a>
            </div>


            <div class="space-y-6">
                <h1 class="text-2xl">Example 1</h1>
                <div class="group-scope bg-white hover:bg-blue-500 ...">
                    <p class="text-gray-900 group-scope-hover:text-white ...">New Project</p>
                    <div class="group-scope bg-gray-100 hover:bg-green-500 ...">
                        <p class="text-gray-500 group-scope-hover:text-yellow-400 ...">Create a <span class="group-scope-hover:text-red-600">new project</span> from a variety of starting templates.</p>
                    </div>
                </div>

                <h1 class="text-2xl">Example 2</h1>
                <div id="A" class="p-4 shadow group-scope text-yellow-800">
                    <pre>#A.group-scope</pre>
                    <div id="B" class="p-4 my-2 shadow group-scope-hover:bg-blue-500 group-scope-hover:text-white">
                        <pre>#B.group-scope-hover</pre>
                    </div>
                    <div id="C" class="p-4 my-2 shadow group-scope">
                        <pre>#C.group-scope</pre>
                        <div id="D" class="p-4 my-2 shadow group-scope-hover:text-red-500">
                            <pre>#D.group-scope-hover</pre>
                        </div>
                    </div>
                    <div id="E" class="p-4 my-2 shadow group-scope">
                        <pre>#E.group-scope</pre>
                        <div id="F" class="p-4 my-2 shadow p-4">
                            <pre>#F</pre>
                            <div id="G" class="p-4 my-2 shadow group-scope-hover:text-red-500">
                                <pre>#G.group-scope-hover</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}