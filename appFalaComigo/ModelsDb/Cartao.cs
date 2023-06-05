using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Models
{
    public class Cartao
    {
        public int CartaoId { get; set; }
        public int PranchaId { get; set; }
        public int ArasaacId { get; set; }
        public string Nome { get; set; }
    }
}