using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.Core.Utilities
{
    public static class StringUtil
    {
        public static string GetRandomCode() => Guid.NewGuid().ToString("N").Substring(0, 12);
    }
}
