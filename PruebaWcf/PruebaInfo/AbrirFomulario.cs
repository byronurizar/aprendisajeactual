using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PruebaInfo
{
   public class AbrirFomulario
    {
      public string  open()
        {
            Form1 form = new Form1();
            if (form.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
            return form.resultado;
            }
            else
            {
                return "El formulario se cerro por el usuario";
            }
            
        }
        
    }
}
