unit TestCase1;

{$mode objfpc}{$H+}

interface

uses
  LongNumber, Classes, SysUtils, fpcunit, testutils, testregistry;

type

  TTestCase1= class(TTestCase)
  protected
    procedure SetUp; override;
    procedure TearDown; override;
  published

    procedure TestRead;
    procedure TestWrite;
    procedure TestAdd;
    procedure TestSub;
    procedure TestMulti;
    procedure TestDiv;
    procedure TestLow;
    procedure TestHigh;
    procedure TestEquv;
    procedure TestNoEquv;
  end;

implementation


procedure TTestCase1.TestRead;
var
  a, b: TLongNumber;
begin
  a := fromString('1000000000000000000000000000', 10);
  a := fromString('+34298342879987389342897342870', 30);
  a := fromString('-1000000000000000000000000000', 34);
  a := fromString('0', 23);
  a := fromString('234333333333333344444444444444', 2);
  a := fromString('34253453453245345325345234523', 90);
  a := fromString('', 10000);
  a := fromString('6', 0);
  a := fromString('6', 1);
end;


procedure TTestCase1.TestWrite;
var
  a, b: TLongNumber;
begin

  a := 900;
  CheckEquals(LongNumber.toString(a, 10), '900', 'Failed TestWrite');
  
  a := -900;
  CheckEquals(LongNumber.toString(a, 10), '-900', 'Failed TestWrite');

  a := fromString('234333333333333344444444444444', 16);
  CheckEquals(LongNumber.toString(a, 16), '234333333333333344444444444444', 'Failed TestWrite');

  a := fromString('0', 16);
  CheckEquals(LongNumber.toString(a, 2), '0', 'Failed TestWrite');
end;



procedure TTestCase1.TestAdd;
var
  a, b: TLongNumber;
begin
  a := fromString('100000000000000', 10);
  b := fromString('200000000000000', 10);
  CheckEquals(LongNumber.toString(a + b, 10), '300000000000000', 'Failed TestAdd');

  a := fromString('-100000000000000', 10);
  b := fromString('+200000000000000', 10);
  CheckEquals(LongNumber.toString(a + b, 10), '100000000000000', 'Failed TestAdd');

  a := fromString('+100000000000000', 10);
  b := fromString('-200000000000000', 10);
  CheckEquals(LongNumber.toString(a + b, 10), '-100000000000000', 'Failed TestAdd');

  a := fromString('-100000000000000', 10);
  b := fromString('-200000000000000', 10);
  CheckEquals(LongNumber.toString(a + b, 10), '-300000000000000', 'Failed TestAdd');
end;

procedure TTestCase1.TestSub;
var
  a, b: TLongNumber;
begin
  a := fromString('100000000000000', 10);
  b := fromString('200000000000000', 10);
  CheckEquals(LongNumber.toString(a - b, 10), '-100000000000000', 'Failed TestSub');

  a := fromString('-100000000000000', 10);
  b := fromString('+200000000000000', 10);
  CheckEquals(LongNumber.toString(a - b, 10), '-300000000000000', 'Failed TestSub');

  a := fromString('+100000000000000', 10);
  b := fromString('-200000000000000', 10);
  CheckEquals(LongNumber.toString(a - b, 10), '300000000000000', 'Failed TestSub');

  a := fromString('-100000000000000', 10);
  b := fromString('-200000000000000', 10);
  CheckEquals(LongNumber.toString(a - b, 10), '100000000000000', 'Failed TestSub');
end;


procedure TTestCase1.TestMulti;
var
  a, b: TLongNumber;
begin
  a := fromString('2000000', 10);
  b := fromString('3000000', 10);
  CheckEquals(LongNumber.toString(a * b, 10), '6000000000000', 'Failed TestMulti ++');

  a := fromString('-2000000', 10);
  b := fromString('3000000', 10);
  CheckEquals(LongNumber.toString(a * b, 10), '-6000000000000', 'Failed TestMulti -+');

  a := fromString('2000000', 10);
  b := fromString('-3000000', 10);
  CheckEquals(LongNumber.toString(a * b, 10), '-6000000000000', 'Failed TestMulti +-');

  a := fromString('-2000000', 10);
  b := fromString('-3000000', 10);
  CheckEquals(LongNumber.toString(a * b, 10), '6000000000000', 'Failed TestMulti --');
end;


procedure TTestCase1.TestDiv;
var
  a: TLongNumber;
begin
  a := fromString('2000000000000', 10);
  CheckEquals(LongNumber.toString(a / 2, 10), '1000000000000', 'Failed TestDiv');

  a := fromString('-2000000000000', 10);
  CheckEquals(LongNumber.toString(a / 2, 10), '-1000000000000', 'Failed TestDiv');

  a := fromString('-2000000000000', 10);
  CheckEquals(LongNumber.toString(a / -2, 10), '1000000000000', 'Failed TestDiv');

  a := fromString('2000000000000', 10);
  CheckEquals(LongNumber.toString(a / -2, 10), '-1000000000000', 'Failed TestDiv');
end;

procedure TTestCase1.TestLow;
var
  a, b: TLongNumber;
begin
  a := fromString('2000000', 10);
  b := fromString('1000000', 10);
  CheckEquals(a < b, false, 'Failed TestLow');

  a := fromString('1000000', 10);
  b := fromString('2000000', 10);
  CheckEquals(a < b, true, 'Failed TestLow');

  a := fromString('0', 10);
  b := fromString('0', 10);
  CheckEquals(a < b, false, 'Failed TestLow');

  a := fromString('-2000000', 10);
  b := fromString('1000000', 10);
  CheckEquals(a < b, true, 'Failed TestLow');

  a := fromString('1000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a < b, false, 'Failed TestLow');

  a := fromString('-2000000', 10);
  b := fromString('-1000000', 10);
  CheckEquals(a < b, true, 'Failed TestLow');

  a := fromString('-1000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a < b, false, 'Failed TestLow');
end;


procedure TTestCase1.TestHigh;
var
  a, b: TLongNumber;
begin
  a := fromString('2000000', 10);
  b := fromString('1000000', 10);
  CheckEquals(a > b, true, 'Failed TestHigh');

  a := fromString('1000000', 10);
  b := fromString('2000000', 10);
  CheckEquals(a > b, false, 'Failed TestHigh');

  a := fromString('0', 10);
  b := fromString('0', 10);
  CheckEquals(a > b, false, 'Failed TestHigh');

  a := fromString('-2000000', 10);
  b := fromString('1000000', 10);
  CheckEquals(a > b, false, 'Failed TestHigh');

  a := fromString('1000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a > b, true, 'Failed TestHigh');

  a := fromString('-2000000', 10);
  b := fromString('-1000000', 10);
  CheckEquals(a > b, false, 'Failed TestHigh');

  a := fromString('-1000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a > b, true, 'Failed TestHigh');
end;


procedure TTestCase1.TestEquv;
var
  a, b: TLongNumber;
begin
  a := fromString('2000000', 10);
  b := fromString('1000000', 10);
  CheckEquals(a = b, false, 'Failed TestEquv');

  a := fromString('1000000', 10);
  b := fromString('2000000', 10);
  CheckEquals(a = b, false, 'Failed TestEquv');

  a := fromString('0', 10);
  b := fromString('0', 10);
  CheckEquals(a = b, true, 'Failed TestEquv');

  a := fromString('-2000000', 10);
  b := fromString('2000000', 10);
  CheckEquals(a = b, false, 'Failed TestEquv');

  a := fromString('2000000', 10);
  b := fromString('+2000000', 10);
  CheckEquals(a = b, true, 'Failed TestEquv');

  a := fromString('-2000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a = b, true, 'Failed TestEquv');

  a := fromString('-1000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a = b, false, 'Failed TestEquv');
end;

procedure TTestCase1.TestNoEquv;
var
  a, b: TLongNumber;
begin
  a := fromString('2000000', 10);
  b := fromString('1000000', 10);
  CheckEquals(a <> b, true, 'Failed TestNoEquv');

  a := fromString('1000000', 10);
  b := fromString('2000000', 10);
  CheckEquals(a <> b, true, 'Failed TestNoEquv');

  a := fromString('0', 10);
  b := fromString('0', 10);
  CheckEquals(a <> b, false, 'Failed TestNoEquv');

  a := fromString('-2000000', 10);
  b := fromString('2000000', 10);
  CheckEquals(a <> b, true, 'Failed TestNoEquv');

  a := fromString('2000000', 10);
  b := fromString('+2000000', 10);
  CheckEquals(a <> b, false, 'Failed TestNoEquv');

  a := fromString('-2000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a <> b, false, 'Failed TestNoEquv');

  a := fromString('-1000000', 10);
  b := fromString('-2000000', 10);
  CheckEquals(a <> b, true, 'Failed TestNoEquv');
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

