using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace appFalaComigo.Models
{
    public class FalaComigoModel
    {
        public List<Usuario> Users { get; set; }
        public Usuario SelectedUser { get; set; }
        public List<Prancha> Boards{ get; set; }
    }
}