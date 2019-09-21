using System;
using System.IO;
using System.Linq;

namespace HeapSort {
    class Program {
        static void Main(string[] args) {

            //var a = new int[] { 7, 6, 3, 46, 7 };
            //var c = HeapSort(a);

            var n = int.Parse(File.ReadAllText("heapsort.in"));

            int len, i, j;

            var heap = new int[n];

            ref var a0 = ref heap[0];
            ref var a1 = ref heap[1];
            ref var a2 = ref heap[2];
            ref var a3 = ref heap[3];
            ref var a4 = ref heap[4];
            ref var a5 = ref heap[5];

            //          0
            //    1           2
            // 3    4      5     6
            //7 8  9 10  11 12  13 14

            //         1
            //     2       3
            //  4    5     

            //   3       2       1
            // 1   2   1   3   2   3
            // 6 5 3 2 4 1
            len = 0;

            for (i = 2; i <= n; i++) {
                heap[len] = i;
                j = len++;
                while (j > 0) {
                    Swap(ref heap[j], ref heap[Parent(j)]);
                    j = Parent(j);
                }
                heap[len] = 1;
            }

            File.WriteAllText("heapsort.out", string.Join(" ", heap.Select(el => Convert.ToString(el)).ToArray()));

            //Console.ReadKey();
        }

        static int HeapSort(int[] a) {
            var count = 0;



            for (int of = a.Length - 1; of > 0; of--) {
                for (int i = of; i > 0; i--) {
                    var p = Parent(i);
                    if (a[p] < a[i]) {
                        Swap(ref a[p], ref a[i]);
                        count++;
                    }
                }
                Swap(ref a[0], ref a[of]);

            }
            return count;


        }
        static int Parent(int i) {
            return (i - 1) / 2;
        }

        static int Left(int i) {
            return i * 2 + 1;
        }

        static int Right(int i) {
            return i * 2 + 2;
        }

        static void Swap<T>(ref T a, ref T b) {
            var c = a;
            a = b;
            b = c;
        }
    }
}
