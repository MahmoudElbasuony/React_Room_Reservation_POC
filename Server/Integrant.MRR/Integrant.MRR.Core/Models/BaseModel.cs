using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.DAL.Models
{
    public abstract class BaseModel  
    {
        public string ID { get; set; }
        public string ModifiedBy { get; set; }
        public string ModifiyDate { get; set; }
    }
}
