import { consoleTransport } from "../transports";


describe("consoleTransport", () => {
	const mockWrite = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should have property write", () => {
		const transport = consoleTransport(true);
		expect(transport).toHaveProperty("write");
	});

	it("should write messages to the console with color", () => {
		const transport = consoleTransport(false);
		const color = { blue: (text: string) => text }
		let logMessageWithColor = transport.write("Test message 1","info");
		const msgColor = color.blue(`${logMessageWithColor}`);
		expect(msgColor).toBe(logMessageWithColor);
	});

	it("should write messages with metadata", () => {
		const transport = consoleTransport(true);
		expect(transport.write).toHaveLength(1)
	});
});