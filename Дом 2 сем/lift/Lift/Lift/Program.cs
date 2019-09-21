using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lift {
    class Program {

        static void Main(string[] args) {

            var input = File.OpenText("input.txt");
            var p = input.ReadLine().Split(' ');

            var n = int.Parse(p[0]); // количество людей, вызывающих лифт
            var m = int.Parse(p[1]); // количество этажей в здании.

            var time = new int[n]; // секунда
            var numb = new int[n]; // номер этажа

            int[] zax; // остановки по пути вниз
            int[] ver; // очередь вызовов
            int pos  = 1; // текущий этаж лифта
            int t = 0; // текущее время

            // Взять заказ
            
            // Поднятся до него
            
            for (int i = 0; i < n; i++) {




            }



























            //var time = 0; // общее время


            //// Note: время высадки человека = прошедшее время до его посадки + его этаж -1

            //var call = new int[n]; // время вызова
            //var level = new int[n]; // этаж вызова

            //for (int i = 0; i < n; i++) {
            //    p = input.ReadLine().Split(' ');
            //    call[i] = int.Parse(p[0]);
            //    level[i] = int.Parse(p[1]);
            //}
            //input.Close();
















            //Console.WriteLine(string.Join("\n", call));
            //Console.ReadKey();


        }
    }
}
