unit Unit1;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, Forms, Controls, Graphics, Dialogs, StdCtrls;

type
  { TForm1 }
  TButton1 = class(TButton)
  public
      flag: boolean;
      constructor Create(p: TComponent);

   end;





  TForm1 = class(TForm)
    Button1: TButton1;
    Button2: TButton1;
    procedure ButtonClick(Sender: TObject);
  private

  public

  end;

var
  Form1: TForm1;
  flag: boolean;

implementation
constructor Tbutton1.Create(p: TComponent);
      begin
        inherited Create(p);
        flag := false;
      end;

{$R *.lfm}

{ TForm1 }


procedure TForm1.ButtonClick(Sender: TObject);
var
  B:TButton;
begin
  B := sender as tbutton1;
  if(flag) then
      B.caption := 'YES YES YES'
  else
      B.caption := 'noo';
  flag := not flag;

end;

end.

