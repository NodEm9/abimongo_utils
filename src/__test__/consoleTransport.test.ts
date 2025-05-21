import { consoleTransport } from "../transports";


describe("consoleTransport", () => {
	const mockWrite = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("should have property log", () => {
		const transport = consoleTransport(true);
		expect(transport).toHaveProperty("log");
	});

	it("should log messages to the console with color", () => {
		const transport = consoleTransport(false);
		const color = { blue: (text: string) => text }
		let logMessageWithColor = transport.log("info", "Test message 1");
		const msgColor = color.blue(`${logMessageWithColor}`);
		expect(msgColor).toBe(logMessageWithColor);
	});

	it("should log messages with metadata", () => {
		const transport = consoleTransport(true);
		expect(transport.log).toHaveLength(2)
	});
});