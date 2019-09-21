using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace aSumPere {
    class Program {

        static void Main(string[] args) {

            var input = File.ReadAllText("input.txt").Split(' ');
            var a = Array.ConvertAll(input[0].ToCharArray(), ch => ch - 48);
            var b = Array.ConvertAll(input[1].ToCharArray(), ch => ch - 48);
            var c = int.Parse(input[2]);

            // Permutations
            var aPerms = new List<int>();
            var bPerms = new List<int>();

            Array.Sort(a);
            Array.Sort(b);

            do if (a[0] > 0) aPerms.Add(ToInt(a));
            while (NextPerm(a));

            do if (b[0] > 0) bPerms.Add(ToInt(b));
            while (NextPerm(b));

            int? x = null, y = null;
            int ib = bPerms.Count - 1, ia = 0;
            while (ib >= 0 && ia < aPerms.Count) {
                int sum = aPerms[ia] + bPerms[ib];
                if (sum == c) {
                    x = aPerms[ia];
                    y = bPerms[ib];
                    ib--;
                    ia++;
                    break;
                }
                else if (sum < c)
                    ia++;
                else
                    ib--;
            }
            if (x != null && y != null) {
                File.WriteAllText("output.txt", "YES" + Environment.NewLine + x + ' ' + y);
            }
            else {
                File.WriteAllText("output.txt", "NO");
            }


            // 2  4; <;  /\ -
            // 3 5; >; - \/
            // 3  4; V;  /\ \/
            //Console.ReadKey();
        }



        static bool NextPerm(int[] a) {
            int n = a.Length;
            int j = n - 2;
            while (j != -1 && a[j] >= a[j + 1]) j--; // найти число меньше предыдущего
            if (j == -1)
                return false; // перестановок нет

            int k = n - 1;
            while (a[j] >= a[k]) k--; // число больше прошлого

            Swap(ref a[j], ref a[k]);
            int l = j + 1, r = n - 1;
            while (l < r) // переворот
                Swap(ref a[l++], ref a[r--]);
            return true;
        }


        static int ToInt(int[] a) {
            return a.Select((t, i) => t * Convert.ToInt32(Math.Pow(10, a.Length - i - 1))).Sum();
        }

        static void Swap<T>(ref T a, ref T b) {
            var c = a;
            a = b;
            b = c;
        }

    }
}
