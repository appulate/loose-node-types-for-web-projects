// This type is used in @types/cheerio.
type Buffer = any;

declare module "stream" {
	// This type is used in exceljs.
	type Stream = any;
}

declare module "events" {
	// This type is used in exceljs.
	type EventEmitter = any;
}

declare namespace NodeJS {
	// This type is used in exceljs.
	type TypedArray = any;
}
