import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Upload,
  FileText,
  Image,
  File,
  X,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Tag,
  Bot,
  ArrowLeft,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file: File) => {
    if (file.type.includes("image")) return Image;
    if (file.type.includes("pdf")) return FileText;
    return File;
  };

  const analyzeFiles = async () => {
    setAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          setAnalysisComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // Mock analysis results
  const analysisResults = {
    summary: {
      totalTransactions: 147,
      totalAmount: 4821.32,
      avgTransaction: 32.79,
      timeRange: "March 2024",
    },
    insights: [
      {
        type: "warning",
        title: "High Dining Expenses",
        description: "Dining expenses are 47% above your typical spending",
        amount: "$687.42",
        recommendation:
          "Consider meal planning to reduce dining costs by $200/month",
      },
      {
        type: "success",
        title: "Improved Savings Rate",
        description:
          "Your savings rate increased by 12% compared to last month",
        amount: "$345.18",
        recommendation:
          "Great job! Consider increasing your emergency fund target",
      },
      {
        type: "info",
        title: "Subscription Analysis",
        description: "Found 3 recurring subscriptions totaling $47.97/month",
        amount: "$47.97",
        recommendation:
          "Review and cancel unused subscriptions to save annually",
      },
    ],
    categories: [
      { name: "Dining & Food", amount: 687.42, percentage: 14.3, trend: "up" },
      { name: "Groceries", amount: 432.18, percentage: 9.0, trend: "down" },
      {
        name: "Transportation",
        amount: 234.56,
        percentage: 4.9,
        trend: "stable",
      },
      { name: "Utilities", amount: 156.78, percentage: 3.3, trend: "stable" },
      { name: "Entertainment", amount: 98.42, percentage: 2.0, trend: "up" },
    ],
    monthlyTrend: [
      { month: "Jan", amount: 4234 },
      { month: "Feb", amount: 3987 },
      { month: "Mar", amount: 4821 },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-xl">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Document Analysis
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Upload and analyze your financial documents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {!analysisComplete ? (
            <>
              {/* Upload Area */}
              <Card>
                <CardHeader>
                  <CardTitle>Upload Financial Documents</CardTitle>
                  <CardDescription>
                    Upload bank statements, receipts, budgets, or any financial
                    documents for AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      isDragOver
                        ? "border-primary bg-accent/50"
                        : "border-muted"
                    }`}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={() => setIsDragOver(true)}
                    onDragLeave={() => setIsDragOver(false)}
                  >
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Drop files here or click to browse
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Supports PDF, CSV, Excel, images, and text files
                    </p>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.csv,.xlsx,.xls,.txt,.png,.jpg,.jpeg"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button asChild>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        Browse Files
                      </label>
                    </Button>
                  </div>

                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold">
                        Uploaded Files ({files.length})
                      </h4>
                      {files.map((file, index) => {
                        const Icon = getFileIcon(file);
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 border rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-5 h-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium">{file.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFile(index)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Analysis Button */}
                  {files.length > 0 && !analyzing && (
                    <div className="mt-6 text-center">
                      <Button
                        onClick={analyzeFiles}
                        size="lg"
                        className="min-w-48"
                      >
                        <Bot className="w-5 h-5 mr-2" />
                        Analyze Documents
                      </Button>
                    </div>
                  )}

                  {/* Analysis Progress */}
                  {analyzing && (
                    <div className="mt-6 space-y-4">
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">
                          Analyzing Documents...
                        </h4>
                        <p className="text-muted-foreground">
                          FinBot is processing your financial data
                        </p>
                      </div>
                      <Progress value={analysisProgress} className="h-3" />
                      <div className="text-center text-sm text-muted-foreground">
                        {analysisProgress}% complete
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Supported Formats Info */}
              <Card>
                <CardHeader>
                  <CardTitle>What FinBot Can Analyze</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center space-y-2">
                      <FileText className="w-8 h-8 mx-auto text-primary" />
                      <h4 className="font-semibold">Bank Statements</h4>
                      <p className="text-sm text-muted-foreground">
                        PDF, CSV, Excel formats
                      </p>
                    </div>
                    <div className="text-center space-y-2">
                      <Image className="w-8 h-8 mx-auto text-primary" />
                      <h4 className="font-semibold">Receipts & Images</h4>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG image files
                      </p>
                    </div>
                    <div className="text-center space-y-2">
                      <DollarSign className="w-8 h-8 mx-auto text-primary" />
                      <h4 className="font-semibold">Budget Sheets</h4>
                      <p className="text-sm text-muted-foreground">
                        Excel, CSV, text files
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            /* Analysis Results */
            <div className="space-y-6">
              {/* Success Header */}
              <Card className="bg-success-50 border-success-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-success-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-success-900">
                        Analysis Complete!
                      </h3>
                      <p className="text-success-700">
                        FinBot has analyzed your documents and found key
                        insights
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Document Summary</CardTitle>
                  <CardDescription>
                    Overview of analyzed financial data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center space-y-1">
                      <p className="text-2xl font-bold">
                        {analysisResults.summary.totalTransactions}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Transactions
                      </p>
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-2xl font-bold">
                        ${analysisResults.summary.totalAmount.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Total Amount
                      </p>
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-2xl font-bold">
                        ${analysisResults.summary.avgTransaction}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Avg Transaction
                      </p>
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-2xl font-bold">
                        {analysisResults.summary.timeRange}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Time Range
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    AI Insights & Recommendations
                  </CardTitle>
                  <CardDescription>
                    Personalized financial advice based on your document
                    analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysisResults.insights.map((insight, index) => {
                      let icon, bgColor, textColor;

                      switch (insight.type) {
                        case "warning":
                          icon = AlertCircle;
                          bgColor = "bg-warning-50";
                          textColor = "text-warning-700";
                          break;
                        case "success":
                          icon = CheckCircle2;
                          bgColor = "bg-success-50";
                          textColor = "text-success-700";
                          break;
                        default:
                          icon = FileText;
                          bgColor = "bg-accent";
                          textColor = "text-accent-foreground";
                      }

                      const Icon = icon;

                      return (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border ${bgColor}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${bgColor}`}>
                              <Icon className={`w-5 h-5 ${textColor}`} />
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold">
                                  {insight.title}
                                </h4>
                                <span className="font-bold text-lg">
                                  {insight.amount}
                                </span>
                              </div>
                              <p className="text-muted-foreground">
                                {insight.description}
                              </p>
                              <div className="bg-card p-3 rounded border">
                                <p className="text-sm">
                                  <strong>Recommendation:</strong>{" "}
                                  {insight.recommendation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Category Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Spending Categories</CardTitle>
                  <CardDescription>
                    Breakdown of expenses by category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysisResults.categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Tag className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{category.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {category.percentage}% of total
                            </p>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-2">
                          <span className="font-bold">${category.amount}</span>
                          {category.trend === "up" && (
                            <TrendingUp className="w-4 h-4 text-destructive" />
                          )}
                          {category.trend === "down" && (
                            <TrendingDown className="w-4 h-4 text-success-600" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setAnalysisComplete(false);
                    setFiles([]);
                    setAnalysisProgress(0);
                  }}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Analyze More Documents
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Dashboard
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Upload;
