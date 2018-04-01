using Integrant.MRR.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.DAL.Models
{
    public class MeetingRoom : BaseModel
    {
        public string Code { get; set; }
        public int Floor { get; set; }
        public int MaxSeatsCount { get; set; }
        public bool HasSpeakers { get; set; }
        public bool HasMonitor { get; set; }
        public bool HasProjector { get; set; }
    }
}
