function test(item, callMeWhenDone) {{
    console.log("start the test case", item);
    callMeWhenDone()
}}

test("verify Login page is working", async (page) =>
{
console.log("Test structure of playwright");
})