using System;
using System.Collections.Generic;
using System.IO;

namespace WordEsCubes {
    class Program {
        static void Main(string[] args) {

            var input = File.ReadAllLines("input.txt");

            var n = int.Parse(input[0]);
            var s = input[1];
            var k = s.Length;

            if (n < k) {
                File.WriteAllText("output.txt", "0");
                return;
            }

            //12!*6 < 8 sec

            var cubs = new SortedSet<char>[n]; // кубики из букв
            var perm = new int[n]; // Перестановка

            for (int i = 0; i < n; i++) {
                perm[i] = i + 1;
                cubs[i] = new SortedSet<char>();
                for (int j = 0; j < 6; j++) {
                    if (!cubs[i].Contains(input[i + 2][j]))
                        cubs[i].Add(input[i + 2][j]);
                }
            }
            //

            bool flag;

            while (true) { // Правильные варианты расставления кубиков

                flag = true;

                for (int i = 0; i < k; i++) { // Проверка совпадения букв

                    if (!cubs[perm[i] - 1].Contains(s[i])) {
                        flag = false;
                        break;
                    }
                }

                if (flag || !NextPerm(perm)) break;
            }

            Array.Resize(ref perm, k);

            if (flag) {
                File.WriteAllText("output.txt", string.Join(" ", perm));
            }
            else {
                File.WriteAllText("output.txt", "0");
            }




        }


        static bool NextPerm(int[] a) {
            int n = a.Length;
            int j = n - 2;
            while (j != -1 && a[j] >= a[j + 1]) j--;
            if (j == -1)
                return false;
            int k = n - 1;
            while (a[j] >= a[k]) k--;
            Swap(ref a[j], ref a[k]);
            int l = j + 1, r = n - 1;
            while (l < r)
                Swap(ref a[l++], ref a[r--]);
            return true;
        }

        static void Swap<T>(ref T a, ref T b) {
            T c = a;
            a = b;
            b = c;
        }

    }
}
