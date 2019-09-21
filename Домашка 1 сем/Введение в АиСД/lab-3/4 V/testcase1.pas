unit TestCase1;

{$mode objfpc}{$H+}

interface

uses
	Classes, SysUtils, fpcunit, testutils, testregistry, MathParser;

type

	TTestCase1= class(TTestCase)
	protected
		procedure SetUp; override;
		procedure TearDown; override;
	published
		procedure TestInit;
		procedure TestAdd;
		procedure TestSub;
		procedure TestSk;
		procedure TestZero;
		procedure TestSkErr;
		procedure TestOpers;
		procedure TestSym;
		procedure TestSpaces;
	end;

implementation

procedure TTestCase1.TestInit;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
end;


procedure TTestCase1.TestAdd;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, '-2+2'), 0);
	CheckEquals(res, 0.0);
end;


procedure TTestCase1.TestSub;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, '2+2'), 0);
	CheckEquals(res, 4.0);
end;


procedure TTestCase1.TestSk;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, '(2+2)*(2+3)/2'), 0);
	CheckEquals(res, 10.0);
end;

procedure TTestCase1.TestZero;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, '1/0'), 1);
end;

procedure TTestCase1.TestSkErr;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, '(1/2)('), 2);
	CheckEquals(parser.Eval(res, '(1/2))'), 2);
end;


procedure TTestCase1.TestOpers;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, '2**4'), 3);
	CheckEquals(parser.Eval(res, '2*4*'), 3);
end;

procedure TTestCase1.TestSym;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, 'rwbtwb'), 4);
	CheckEquals(parser.Eval(res, '2*btwb'), 4);
end;

procedure TTestCase1.TestSpaces;
var
	res: Double;
	parser: TMathParser;
begin
	parser := TMathParser.Create();
	CheckEquals(parser.Eval(res, ' 2     -   (    3 +   11  )        +         2'), 0);
	CheckEquals(res, -10.0);
end;




procedure TTestCase1.SetUp;
begin

end;

procedure TTestCase1.TearDown;
begin

end;

initialization

	RegisterTest(TTestCase1);
end.


