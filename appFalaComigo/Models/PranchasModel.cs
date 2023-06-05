using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Models
{
    public class PranchasModel
    {
        public Prancha Board { get; set; }
        public List<Cartao> Cards { get; set; }
    }
}