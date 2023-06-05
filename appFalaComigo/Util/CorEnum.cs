using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Util
{
    public class CorEnum
    {
        public enum Cor
        {
            Padrao,
            Azul,
            Verde,
            Vermelho,
            Laranja,
            Roxo
        }

        public static string GetCorString(Cor cor)
        {
            switch (cor)
            {
                case Cor.Padrao:
                    {
                        return "padrao";
                    }
                case Cor.Azul:
                    {
                        return "azul";
                    }
                case Cor.Verde:
                    {
                        return "verde";
                    }
                case Cor.Vermelho:
                    {
                        return "vermelho";
                    }
                case Cor.Laranja:
                    {
                        return "laranja";
                    }
                case Cor.Roxo:
                    {
                        return "roxo";
                    }
                default:
                    {
                        return "padrao";
                    }
            }
        }

        public static Cor GetCorType(string cor)
        {
            switch (cor)
            {
                case "padrao":
                    {
                        return Cor.Padrao ;
                    }
                case "azul":
                    {
                        return Cor.Azul;
                    }
                case "verde":
                    {
                        return Cor.Verde;
                    }
                case "vermelho":
                    {
                        return Cor.Vermelho;
                    }
                case "laranja":
                    {
                        return Cor.Laranja;
                    }
                case "roxo":
                    {
                        return Cor.Roxo;
                    }
                default:
                    {
                        return Cor.Padrao;
                    }
            }
        }
    }
}