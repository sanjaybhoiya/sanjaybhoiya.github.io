import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  PiggyBank,
  CreditCard,
  FileText,
  Upload,
  MessageCircle,
  BarChart3,
  Target,
  AlertTriangle,
  CheckCircle2,
  Send,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [chatMessage, setChatMessage] = useState("");

  const quickStats = [
    {
      title: "Total Balance",
      value: "$12,847.32",
      change: "+2.4%",
      trending: "up",
      icon: DollarSign,
    },
    {
      title: "Monthly Spending",
      value: "$3,241.18",
      change: "-8.2%",
      trending: "down",
      icon: CreditCard,
    },
    {
      title: "Savings Goal",
      value: "68%",
      change: "+5.1%",
      trending: "up",
      icon: Target,
    },
    {
      title: "Investment Growth",
      value: "$2,104.89",
      change: "+12.7%",
      trending: "up",
      icon: TrendingUp,
    },
  ];

  const recentInsights = [
    {
      type: "warning",
      title: "Overspending Alert",
      description: "You're 23% over budget on dining this month",
      amount: "$287.42",
      action: "Review spending",
    },
    {
      type: "success",
      title: "Savings Opportunity",
      description: "3 unused subscriptions found",
      amount: "$47.97/mo",
      action: "Cancel subscriptions",
    },
    {
      type: "info",
      title: "Bill Reminder",
      description: "Credit card payment due in 3 days",
      amount: "$1,247.18",
      action: "Set reminder",
    },
  ];

  const budgetCategories = [
    { name: "Housing", spent: 1200, budget: 1500, percentage: 80 },
    { name: "Food & Dining", spent: 587, budget: 400, percentage: 147 },
    { name: "Transportation", spent: 234, budget: 300, percentage: 78 },
    { name: "Entertainment", spent: 156, budget: 200, percentage: 78 },
    { name: "Utilities", spent: 178, budget: 200, percentage: 89 },
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle chat message
      setChatMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-xl">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">FinBot</h1>
                <p className="text-sm text-muted-foreground">
                  Your AI Finance Assistant
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                <Link to="/upload">Upload Document</Link>
              </Button>
              <Button size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask FinBot
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">
                            {stat.title}
                          </p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <div className="flex items-center gap-1">
                            {stat.trending === "up" ? (
                              <TrendingUp className="w-4 h-4 text-success-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-destructive" />
                            )}
                            <span
                              className={`text-sm font-medium ${
                                stat.trending === "up"
                                  ? "text-success-600"
                                  : "text-destructive"
                              }`}
                            >
                              {stat.change}
                            </span>
                          </div>
                        </div>
                        <div className="p-3 bg-accent rounded-lg">
                          <Icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Budget Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Budget Overview
                </CardTitle>
                <CardDescription>
                  Track your spending across categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {budgetCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category.name}</span>
                        <div className="text-right">
                          <span className="font-semibold">
                            ${category.spent}
                          </span>
                          <span className="text-muted-foreground">
                            {" "}
                            / ${category.budget}
                          </span>
                        </div>
                      </div>
                      <Progress
                        value={Math.min(category.percentage, 100)}
                        className={`h-2 ${category.percentage > 100 ? "[&>div]:bg-destructive" : "[&>div]:bg-primary"}`}
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span
                          className={
                            category.percentage > 100
                              ? "text-destructive"
                              : "text-muted-foreground"
                          }
                        >
                          {category.percentage}% used
                        </span>
                        {category.percentage > 100 && (
                          <Badge variant="destructive" className="text-xs">
                            Over budget
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Insights */}
            <Card>
              <CardHeader>
                <CardTitle>AI Insights & Recommendations</CardTitle>
                <CardDescription>
                  Personalized financial advice based on your spending patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInsights.map((insight, index) => {
                    let icon, bgColor, textColor;

                    switch (insight.type) {
                      case "warning":
                        icon = AlertTriangle;
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
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{insight.title}</h4>
                              <span className="font-bold text-lg">
                                {insight.amount}
                              </span>
                            </div>
                            <p className="text-muted-foreground">
                              {insight.description}
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-2"
                            >
                              {insight.action}
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chat Interface */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  Ask FinBot
                </CardTitle>
                <CardDescription>Get instant financial advice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-accent/50 p-3 rounded-lg">
                    <p className="text-sm">
                      👋 Hi! I'm FinBot. Ask me anything about your finances,
                      budgeting, or upload a document for analysis.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about your finances..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      className="flex-1"
                    />
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/upload">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Financial Document
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <PiggyBank className="w-4 h-4 mr-2" />
                  Set Savings Goal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Track Expenses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            {/* Financial Health Score */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Health Score</CardTitle>
                <CardDescription>
                  Based on your spending and savings patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <svg
                      className="w-32 h-32 transform -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted/20"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="314"
                        strokeDashoffset="94"
                        className="text-primary"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">78</div>
                        <div className="text-xs text-muted-foreground">
                          Good
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Spending Control</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Savings Rate</span>
                      <span className="font-medium">72%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Budget Adherence</span>
                      <span className="font-medium">76%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
