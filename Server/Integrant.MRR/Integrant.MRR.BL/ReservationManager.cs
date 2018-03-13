using Integrant.MRR.DAL;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.BL
{
    public class ReservationManager
    {
        private MRRContext Context { get; }


        public ReservationManager()
        {
            Context = new MRRContext();

        }



    }
}
